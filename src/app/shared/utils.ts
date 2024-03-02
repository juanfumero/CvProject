export function getBaseUrl(): string {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    return `${publicPath}${publicPathSuffix}`;
}