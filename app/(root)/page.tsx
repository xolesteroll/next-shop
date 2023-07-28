"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs"
import { Modal } from '@/components/ui/modal'
import { StoreModal } from '@/components/modals/storeModal'
import { userStoreModal } from '@/hooks/useStoreModal'
import { useEffect } from 'react'

export default function SetupPage() {
  const onOpen = userStoreModal((state) => state.onOpen)
  const isOpen = userStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className='p-4'>
      Root Page
    </div>
  )
}
