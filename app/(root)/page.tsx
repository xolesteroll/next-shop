"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs"
import { Modal } from '@/components/ui/modal'

export default function SetupPage() {

  return (
    <div className='p-4'>
      <Modal title='Some title' description='Some Description' isOpen onClose={() => {}} >
        <p>Text</p>
      </Modal>
      {/* <UserButton afterSignOutUrl={process.env.baseUrlDev}/> */}
    </div>
  )
}
