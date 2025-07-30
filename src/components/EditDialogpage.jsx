// EditProfileDialog.jsx
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export default function EditProfileDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-600 text-white px-4 py-2 rounded">
        Edit Profile
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">Edit Profile</Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-500 hover:text-black">
                <X />
              </button>
            </Dialog.Close>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
              />
            </div>

            <div className="text-right">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
