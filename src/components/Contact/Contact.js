import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='contact__description'>
        Feel free to reach out through any of these platforms!
      </p>
      
      <div className='contact__methods'>
        {contact.email && (
          <a href={`mailto:${contact.email}`}>
            <span type='button' className='btn btn--outline'>
              📧 Email me
            </span>
          </a>
        )}

        {contact.phone && (
          <a 
            href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span type='button' className='btn btn--outline'>
              💬 WhatsApp
            </span>
          </a>
        )}

        {contact.twitter && (
          <a 
            href={contact.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span type='button' className='btn btn--outline'>
              🐦 Twitter/X
            </span>
          </a>
        )}

        {contact.instagram && (
          <a 
            href={contact.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span type='button' className='btn btn--outline'>
              📸 Instagram
            </span>
          </a>
        )}

        {contact.discord && (
          <div className='contact__discord'>
            <span className='btn btn--outline'>
              🎮 Discord: {contact.discord}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
