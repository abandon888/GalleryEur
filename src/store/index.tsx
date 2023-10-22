import { create } from 'zustand'

interface controlStore {
  isLockControl: boolean
  setIsLock: (isLockControl: boolean) => void
}

export const useControlStore = create<controlStore>((set) => ({
  isLockControl: true,
  setIsLock: (isLockControl) => set({ isLockControl }),
}))
