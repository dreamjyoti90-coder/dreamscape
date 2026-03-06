'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

interface FilterBarProps {
  onFilterChange: (filters: { type?: string; mood?: string; search?: string }) => void
}

const dreamTypes = ['All', 'Lucid', 'Nightmare', 'Recurring', 'Prophetic', 'Surreal', 'Adventure', 'Flying', 'Other']
const dreamMoods = ['All', 'Peaceful', 'Eerie', 'Euphoric', 'Anxious', 'Mystical', 'Melancholic', 'Chaotic', 'Serene']

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedMood, setSelectedMood] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    onFilterChange({
      type: type === 'All' ? undefined : type,
      mood: selectedMood === 'All' ? undefined : selectedMood,
      search: searchTerm || undefined,
    })
  }

  const handleMoodChange = (mood: string) => {
    setSelectedMood(mood)
    onFilterChange({
      type: selectedType === 'All' ? undefined : selectedType,
      mood: mood === 'All' ? undefined : mood,
      search: searchTerm || undefined,
    })
  }

  const handleSearchChange = (search: string) => {
    setSearchTerm(search)
    onFilterChange({
      type: selectedType === 'All' ? undefined : selectedType,
      mood: selectedMood === 'All' ? undefined : selectedMood,
      search: search || undefined,
    })
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
        <input
          type="text"
          placeholder="Search dreams..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-input bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Dream Type */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="w-4 h-4 text-accent-primary" />
            <label className="text-sm font-medium text-text-heading">Dream Type</label>
          </div>
          <div className="flex flex-wrap gap-2">
            {dreamTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedType === type
                    ? 'bg-accent-primary text-white'
                    : 'bg-bg-elevated text-text-muted hover:bg-bg-glass hover:text-text-primary border border-border-subtle'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Dream Mood */}
        <div>
          <label className="text-sm font-medium text-text-heading mb-3 block">Dream Mood</label>
          <div className="flex flex-wrap gap-2">
            {dreamMoods.map((mood) => (
              <button
                key={mood}
                onClick={() => handleMoodChange(mood)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedMood === mood
                    ? 'bg-accent-moon text-bg-deep'
                    : 'bg-bg-elevated text-text-muted hover:bg-bg-glass hover:text-text-primary border border-border-subtle'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
