const imageContext = require.context(
  "../assets/images",
  false,
  /\.(png|jpe?g|svg|gif|webp)$/i
);

export function getImageUrl(filename) {
  if (!filename) {
    return null;
  }

  try {
    return imageContext(`./${filename}`);
  } catch (error) {
    return null;
  }
}
