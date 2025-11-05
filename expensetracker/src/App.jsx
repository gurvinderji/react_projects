import { Edit, Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import moment from 'moment'
import { Button, DatePicker, Form, Input, InputNumber, Modal } from 'antd'
import { useExpense } from './zustand/useExpense'
import { nanoid } from 'nanoid'

const App = () => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const {expenses, setExpense, deleteExpense, updateExpense } = useExpense()
  const [editId, setEditId] = useState(null)

  const createExpense = (values)=>{
    values.id = nanoid()
    values.date = moment(values.date).toDate()
    setExpense(values)
    handleClose()
  }

  const saveExpense = (values)=>{
    values.date = moment(values.date).toDate()
    updateExpense(editId, values)
    handleClose()
  }

  const handleClose = ()=>{
    setEditId(null)
    setOpen(false)
    form.resetFields()
  }

  const edit = (item)=>{
    setEditId(item.id)
    item.date = moment(item.date)
    setOpen(true)
    form.setFieldsValue(item)
  }

  return (
    <div className='bg-slate-900 min-h-screen py-12'>
      <div className='w-9/12 mx-auto bg-white rounded-xl'>
        <div className='p-8 flex flex-col gap-6'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>Expense Tracker</h1>
            <button onClick={()=>setOpen(true)} className='flex items-center bg-indigo-600 text-white rounded px-8 py-2.5 font-medium hover:scale-105 transition-transform duration-300'>
              <Plus className='w-4 h-4 mr-1' />
              Add new
            </button>
          </div>
          <input 
            placeholder='Search these exepenses'
            className='p-3 rounded border border-gray-300'
          />
          <table className='w-full'>
            <tr className='bg-indigo-600 text-white text-left'>
              <th className='py-2.5 pl-4'>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
            {
              expenses.map((item, index)=>(
                <tr className='border-b border-b-gray-200' key={index}>
                  <td className='pl-4 py-3'>{item.title}</td>
                  <td>{item.description}</td>
                  <td>₹{item.amount}</td>
                  <td>{moment(item.date).format("DD MMM YYYY, hh:mm A")}</td>
                  <td>
                    <div className='flex gap-3'>
                      <button onClick={()=>edit(item)} className='w-8 h-8 bg-green-400 text-white flex items-center justify-center rounded'>
                        <Edit className='w-4 h-4' />
                      </button>

                      <button onClick={()=>deleteExpense(item.id)} className='w-8 h-8 bg-rose-500 text-white flex items-center justify-center rounded'>
                        <Trash2 className='w-4 h-4' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </table>
          <div className='flex items-center justify-end'>
            <h1 className='text-3xl font-bold'>Total Expenses - ₹{(expenses.reduce((sum, item)=>sum+item.amount, 0)).toLocaleString()} </h1>
          </div>
        </div>
      </div>
      <Modal open={open} footer={null} onCancel={handleClose}>
        <Form layout='vertical' onFinish={editId ? saveExpense : createExpense} form={form}>
          <Form.Item
            label="Expense title"
            name="title"
            rules={[{required: true}]}
          >
            <Input  
              size='large'
              placeholder='Expense name here'
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{required: true}]}
          >
            <Input.TextArea 
              size='large'
              placeholder='Description goes here...'
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{required: true}]}
            className='!w-full'
          >
            <InputNumber 
              size='large'
              placeholder='Amount'
              className='!w-full'
            />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{required: true}]}
            className='!w-full'
          >
            <DatePicker
              size='large'
              placeholder='Choose expense date'
              className='!w-full'
            />
          </Form.Item>

          <Form.Item>
            {
              editId ?
              <Button size='large' type='primary' htmlType='submit' danger>Save</Button>
              :
              <Button size='large' type='primary' htmlType='submit'>Submit</Button>
            }
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App
