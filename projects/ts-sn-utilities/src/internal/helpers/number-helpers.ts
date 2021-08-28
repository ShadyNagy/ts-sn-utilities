export class NumberHelpers {
    public static round(value: number, decimals: number): number {
        return Number(Math.round(+(value.toString() + 'e' + decimals.toString())) + 'e-' + decimals);
    }
}
