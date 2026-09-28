// Each page brings its own layout and global styles, so the current
// design (/) and Version 1 (/v1) don't share any styling.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
