import { ButtonAddProps } from '@/lib/definitions/ui/ui'
import Link from 'next/link'
import React from 'react'

const AddButton:React.FC<ButtonAddProps> = ({title,to}) => {
  return (
    <div className="flex justify-end mt-4 my-4">
        <Link
          href={to}
          className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
         {title}
        </Link>
      </div>
  )
}

export default AddButton