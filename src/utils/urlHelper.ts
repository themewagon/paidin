/**
 * Helper function to prefix URLs with basePath for GitHub Pages deployment
 * In production, basePath is '/paidin-nextjs'
 * In development, basePath is ''
 */

/**
 * Prefix a URL with the basePath
 * @param url - The URL to prefix (should start with /)
 * @returns The prefixed URL
 */
export const withBasePath = (url: string): string => {
    // If the URL doesn't start with /, return as-is (external link)
    if (!url.startsWith('/')) {
        return url
    }

    // Get the basePath from Next.js config
    const basePath =
        typeof window !== 'undefined'
            ? ((window as unknown) as { __NEXT_DATA__?: { basePath?: string } }).__NEXT_DATA__?.basePath || ''
            : process.env.NODE_ENV === 'production'
                ? '/paidin-nextjs'
                : ''

    return basePath + url
}

/**
 * Get just the basePath
 */
export const getBase = (): string => {
    return typeof window !== 'undefined'
        ? ((window as unknown) as { __NEXT_DATA__?: { basePath?: string } }).__NEXT_DATA__?.basePath || ''
        : process.env.NODE_ENV === 'production'
            ? '/paidin-nextjs'
            : ''
}