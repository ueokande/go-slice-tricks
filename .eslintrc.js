module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  env: {
      node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
