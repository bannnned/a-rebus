import { ChangeEvent, useState } from 'react'
import Vigenere from './assets/Vigenere.jpg'
import Source from './assets/the-key-is-vue.png'
import { useNavigate } from 'react-router'
import { PATH_PREFIX } from './constants'

export const Final = () => {
    const [value, setValue] = useState<string>()
    const navigate = useNavigate();

    const answer = import.meta.env.ANSWER || 'winner-winner-chicken-dinner'
    const secretCode = import.meta.env.SECRET_CODE || 'vfjv-qmihim'
    const key = import.meta.env.KEY || 'vue'
    const decryptedWord = import.meta.env.DECRYPTED_WORD || 'alfa-winner'

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value)
    }

    const handleRedirect = () => {
        navigate(`/${PATH_PREFIX}/link`);
    }


    return <div className='rebus final'>
        <img src={Vigenere} />
        <div>Шифр здесь:</div>
        <div className='secret-code'>{secretCode}</div>
        <div data-key={key}>Теперь бежим за ключом</div>
        <div onClick={handleRedirect}>
            <img data-key={key} alt={key} className="img no-padding" src={Source} />
        </div>
        <div className='btns'>
            <div>Введите расшифрованное слово</div>
            <input value={value} onChange={handleChange} />
        </div>
        {decryptedWord === value && <div>Финальный код: {answer}. Поздравляем!</div>}
    </div>
}