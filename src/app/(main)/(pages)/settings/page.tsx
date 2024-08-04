import React from "react"
import { ProfilePicture } from "./_components/profile-picture"
import { ProfileForm } from "@/components/forms"

type Props = {}

const Settings: React.FC<Props> = () => {
  const user = null
  const uploadProfileImage = null
  const removeProfileImage = null
  const updateUserInfo = null

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>

      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>

        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage}
          onUpload={uploadProfileImage}
        />

        <ProfileForm user={user} onUpdate={updateUserInfo} />
      </div>
    </div>
  )
}

export default Settings