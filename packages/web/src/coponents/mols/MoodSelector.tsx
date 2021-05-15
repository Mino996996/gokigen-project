import {useState} from 'react'
import {RadioGroup} from '@headlessui/react'

const moodIndex = Array.from(Array(3)).map((_, idx): { level: number; label: string } => {
  let label: string

  switch (idx) {
    case 0:
      label = "Bad"
      break
    case 1:
      label = "Not Good"
      break
    case 2:
      label = "Not Bad"
      break
    default:
      label = "NULL"
  }

  return {
    label,
    level: idx
  }
})

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function MoodSelector() {
  const [selected, setSelected] = useState(moodIndex[0])

  return (
    <RadioGroup className={"flex"} value={selected} onChange={setSelected}>
      {moodIndex.map((plan) => (
        <div key={plan.level}>
          <RadioGroup.Option
            key={plan.label}
            value={plan}
            className={'relative p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'}
          >
            {({active, checked}) => (
              <div className="flex flex-col">
                    <span
                      className={classNames(
                        ' mb-0.5',
                        checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                        active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                        'h-4 w-4 rounded-full border flex items-center justify-center'
                      )}
                      aria-hidden="true"
                    >
                      <span className="rounded-full bg-white w-1.5 h-1.5"/>
                    </span>
                <RadioGroup.Label as="span" className="font-medium text-gray-900">
                  {plan.label}
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        </div>
      ))}
    </RadioGroup>
  )
}
