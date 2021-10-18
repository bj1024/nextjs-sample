
import styles from  '../styles/signin.module.css'
       

export default function LoginLayout({ children }: {children: React.ReactNode}) {
      // {/* <div>header</div> */}

      // {/* <div>hooter</div> */}
  return (
       <div className={styles.container}>
         {children}
       </div>
    
        
      
  )
}
