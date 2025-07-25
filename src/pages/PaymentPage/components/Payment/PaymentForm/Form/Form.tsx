import classes from './Form.module.scss';
import { useForm } from "react-hook-form";
import {type FC, type RefObject, useEffect} from "react";

export interface Inputs {
    cardName:string;
    cardNumber:string;
    cardDate:string;
    cardCVV:number;
}

interface TProps {
    onSubmitRef: RefObject<(() => void) | null>
}

const Form:FC<TProps> = ({onSubmitRef}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const onSubmit= (event) => {
        console.log('Submit', event)
    }

    useEffect(() => {
        if (onSubmitRef) {
            onSubmitRef.current = handleSubmit(onSubmit);
        }
    }, [onSubmitRef, handleSubmit]);
    return (
        <form className={classes.wrapper__form} onSubmit={handleSubmit(onSubmit)}>
            <input className={classes.wrapper__form__name} {...register('cardName', {
                required: 'Cardholder name is required',
                minLength: {value: 3, message: 'Name must be at least 3 characters'},
                maxLength: {value: 50, message: 'Name must not exceed 50 characters'}
            })} type="text" placeholder="Cardholder Name"/>
            {errors.cardName && (<span className={classes.errors}>{errors.cardName.message}</span>)}
            <input className={classes.wrapper__form__card_number} {...register('cardNumber', {
                required: 'Card number is required',
                minLength: {
                    value: 16,
                    message: 'Number must be at least 16 characters'
                },
                maxLength: {
                    value: 16,
                    message: 'Number must not exceed 16 characters'
                },
            })} type="text" placeholder="Card Number"/>
            {errors.cardNumber && (<span className={classes.errors}>{errors.cardNumber.message}</span>)}
            <div className={classes.wrapper__form__backside}>
                <input className={classes.wrapper__form__backside__date} {...register('cardDate', {
                    required: 'Expiration date is required',
                    pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/, // формат MM/YY
                        message: 'Invalid format. Use MM/YY'
                    },
                    validate: (value: string) => {
                        const [month, year] = value.split('/').map(Number);
                        if (!month || !year) return 'Invalid date';

                        const currentDate = new Date();
                        const currentMonth = currentDate.getMonth() + 1;
                        const currentYear = currentDate.getFullYear() % 100; // получаем YY

                        if (year < currentYear || (year === currentYear && month < currentMonth)) {
                            return 'Card has expired';
                        }

                        return true;
                    }
                })} type="text"
                       placeholder="Exp.Date"/>
                {errors.cardDate && (<span className={classes.errors}>{errors.cardDate.message}</span>)}
                <input className={classes.wrapper__form__backside__cvv} {...register('cardCVV', {
                    required: 'Card CVV is required',
                    minLength: {
                        value: 3,
                        message: 'CVV must be at least 3 characters'
                    },
                    maxLength: {
                        value: 3,
                        message: 'CVV must not exceed 3 characters'
                    },
                })} type="number"
                       placeholder="CVV"/>
                {errors.cardCVV && (<span className={classes.errors}>{errors.cardCVV.message}</span>)}
            </div>
            <div className={classes.wrapper__form__save_addres}>
                <input type="checkbox" name="billing" id=""/>
                <span>Same as billing address</span>
            </div>
        </form>
    );
};

export default Form;
