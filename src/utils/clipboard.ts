// import Clipboard from 'clipboard'
// import { ElMessage } from 'element-plus'

// const clipboardSuccess = (el: any) => {
//   ElMessage.success({
//     message: el.text +' Copy successfully',
//     type: 'success'
//   })
// }

// const clipboardError = () => {
//   ElMessage.error('Copy failed')
// }

// export const handleClipboard = (text: any, event: any)  =>{
//   const clipboard = new Clipboard(event.target, {
//     text: () => text
//   })
//   clipboard.on('success', (text) => {
//     clipboardSuccess(text)
//     clipboard.off('error')
//     clipboard.off('success')
//     clipboard.destroy()
//   })
//   clipboard.on('error', () => {
//     clipboardError()
//     clipboard.off('error')
//     clipboard.off('success')
//     clipboard.destroy()
//   })
//   clipboard.onClick(event)
// }
