import { ChangeEvent, useState } from 'react'
import Vigenere from './assets/Vigenere.jpg'
import Source from './assets/the-key-is-vue.png'

export const Final = () => {
    const [value, setValue] = useState<string>()

    const answer = import.meta.env.ANSWER || 'winner-winner-chicken-dinner'
    const secretCode = import.meta.env.SECRET_CODE || 'vfjv-qmihim'
    const key = import.meta.env.KEY || 'vue'
    const decryptedWord = import.meta.env.DECRYPTED_WORD || 'alfa-winner'

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValue(target.value)
    }

    console.log('clck', { answer, secretCode, key, decryptedWord })


    return <div className='rebus final'>
        <img src={Vigenere} />
        <div>Шифр здесь:</div>
        <div className='secret-code'>{secretCode}</div>
        <div data-key={key}>Теперь бежим за ключом</div>
        <img data-key={key} alt={key} className="img no-padding" src={Source} />
        <div className='btns'>
            <div>Введите расшифрованное слово</div>
            <input value={value} onChange={handleChange} />
        </div>
        {decryptedWord === value && <div>Финальный код: {answer}. Поздравляем!</div>}
    </div>
}