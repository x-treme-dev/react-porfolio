import whatsapp from './image/whatsapp.png'
import telegram from './image/telegram.png'

const Contacts = () => {
    return (
        <div className="container">
            <div className="contacts__title">
            <h1 className="contacts__h1">Contacts</h1>
          </div>
          <p className="contacts__p">What to know or just chat?<br/>You are welcome!</p>
          <div className="contacts__button-wrap">
            <button className="contacts__button">Send message</button>
          </div>
          <div className="contacts__icons">
          <img src={telegram} alt="angular" className="contacts__img" width="120px"></img>
          <img src={whatsapp} alt="angular" className="contacts__img" width="120px"></img>
          </div>
        </div>
    );
}

export default Contacts;