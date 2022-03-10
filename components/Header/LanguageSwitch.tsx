import React, {FC} from 'react'
import styles from './languageSwitch.module.scss'
interface Language {
  name: string
}

interface Languages {
  languages?: Language[]
}

const LanguageSwitch:FC<Languages> = ({languages = [{name: 'English'}, {name: 'Portuguese'}]}) => {
  return (
    <select className={styles.language_switch} name="language-switch" id="">
      {languages?.map((i, index) => {
        return <option value={i.name} key={`${i.name}${index}`}>
          {i.name}
          </option>
      }) }
    </select>
  )
}

export default LanguageSwitch