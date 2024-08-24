import { createContext, useContext, useRef } from 'react'

interface QueueGridContextType {
  queue: React.MutableRefObject<number[]>
  isProcessing: React.MutableRefObject<boolean>
}

const QueueGridContext = createContext<QueueGridContextType>(null!)

export const QueueGridContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const queue = useRef<number[]>([])
  const isProcessing = useRef<boolean>(true)

  return (
    <QueueGridContext.Provider value={{ queue, isProcessing }}>
      {children}
    </QueueGridContext.Provider>
  )
}

export const useQueueRef = () => {
  return useContext(QueueGridContext).queue
}

export const useIsProcessing = () => {
  return useContext(QueueGridContext).isProcessing
}

export default QueueGridContext
