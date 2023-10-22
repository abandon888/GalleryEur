import { create } from 'zustand'

interface controlStore {
  isLockControl: boolean
  setIsLock: (isLockControl: boolean) => void
}

export const useControlStore = create<controlStore>((set) => ({
  isLockControl: true,
  setIsLock: (isLockControl) => set({ isLockControl }),
}))

interface videoStore {
  isEnd: boolean
  setIsEnd: (isEnd: boolean) => void
}

export const useVideoStore = create<videoStore>((set) => ({
  isEnd: false,
  setIsEnd: (isEnd) => set({ isEnd }),
}))
