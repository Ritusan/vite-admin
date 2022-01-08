import Clipboard from 'clipboard'
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const { toClipboard } = useClipboard()
export const handleClipboard = async (item: any) => {
  try {
    await toClipboard(item.color)
    ElMessage({
      message: item.desc+': '+item.color +' Copy successfully',
      type: 'success'
    })
  }catch(e) {
    ElMessage.error('Copy failed: '+e)
  }
}
