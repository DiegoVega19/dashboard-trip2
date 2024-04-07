import React from 'react'
import SearchBar from '../Inputs/SearchBar'
import AddButton from './AddButton'
import { TopButtonProps } from '@/lib/definitions/ui/ui'

const TopButtons:React.FC<TopButtonProps> = ({to}) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
        <SearchBar />
        <AddButton title="Add client" to={to} />
      </div>
  )
}

export default TopButtons