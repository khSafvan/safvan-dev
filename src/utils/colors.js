/**
 * Darkens or lightens a hex color by a percentage.
 * @param {string} color - The hex color code (e.g., "#ffffff").
 * @param {number} percent - The percentage to darken (negative) or lighten (positive) the color (e.g., -0.2 for 20% darker).
 * @returns {string} The resulting hex color code.
 */
export function shadeColor(color, percent) {
    // darkens/lightens hex colors
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = (f >> 8) & 0x00ff,
        B = f & 0x0000ff;
    return (
        "#" +
        (
            0x1000000 +
            (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 +
            (Math.round((t - B) * p) + B)
        )
            .toString(16)
            .slice(1)
    );
}
