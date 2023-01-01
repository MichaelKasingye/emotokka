/**
 * currencyFormat(amount:number, currency:string) -
 * Provides a currency format for a given counter.
 */
export function currencyFormat(amount: number, currency: string): any {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        currencySign: 'accounting',
    }).format(amount)
}
