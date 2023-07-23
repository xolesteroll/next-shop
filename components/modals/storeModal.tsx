"use client"

import { userStoreModal } from "@/hooks/useStoreModal"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const storeModal = userStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add a new store, and start earning today!"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <p>Some text</p>
        </Modal>
    )

}