export class StringHelpers {
    public static numberFormatter(value: string): string {
        if (value === undefined || value === null) {
            return value;
        }

        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
