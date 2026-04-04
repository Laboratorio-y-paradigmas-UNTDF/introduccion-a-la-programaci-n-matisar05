 *          calcularConImpuesto(99.99, 10) === 109.99
 */
export function calcularConImpuesto(base: number, tasa: number): number {
    const precioFinal = base * (1+tasa/100);
    return Math.round(precioFinal * 100) / 100;
}

/**