import fiftyPurple from '../../assets/images/5050.jpg';
import askPurple from '../../assets/images/ata.jpg';
import phonePurple from '../../assets/images/paf.png';
import fiftyBlue from '../../assets/images/50502.png';
import askBlue from '../../assets/images/ata2.png';
import phoneBlue from '../../assets/images/paf2.png';
import {actionConstants} from '../../constants';
import styles from './Sidebar.module.css'
import { useEffect, useState } from 'react';

function Action({type, icons}) {
    const [hovered, setHovered] = useState(false);

    const handleAction = () => {
        
    }
    
  return (
    <div>
        <img 
            src={hovered ? icons.hovered : icons.default} alt="action" className={styles.action}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleAction}
        />
    </div>
  )
}

export {Action}