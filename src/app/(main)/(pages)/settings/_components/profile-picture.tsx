"use client"

import React from "react"
import { UploadCareButton } from "./uploadcare-button"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

/**
 * Renders the profile picture component
 *
 * @param userImage: string | null - The user image
 * @param onDelete: any - The delete function
 * @param onUpload: any - The upload function
 * @returns React.FC<Props> - The profile picture component
 */
export const ProfilePicture: React.FC<Props> = ({
  userImage,
  onDelete,
  onUpload,
}) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()

    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-lg text-white"> Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="User_Image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}
