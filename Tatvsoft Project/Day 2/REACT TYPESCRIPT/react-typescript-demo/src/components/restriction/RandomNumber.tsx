type RandomNumberType ={
    value: number
}

type positiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative:boolean
    isNegative?: never
    isZero?: never
}
type Zero = RandomNumberType & {
    isNegative:boolean
    isNegative?: never
    isZero?: never
}

type RandomNumberProps = positiveNumber | NegativeNumber | Zero

export const RandomNumber =({
    value,
    isPositive,
    isNegative,
    isZero,
}:RandomNumberProps) => {
    return(
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'nagative'}{' '}
            {isZero && 'zero'}
        </div>
    )
}