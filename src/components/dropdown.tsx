'use client'

// メニューアイコン
import { MenuIcon } from "lucide-react"
// ボタンUI
import { Button } from "@/components/ui/button"
// ドロップダウンUI関連
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// サインイン・サインアウトボタン
import { SignInButton, SignOutButton } from '@/components/auth-buttons'

// ドロップダウンメニューのコンポーネント
export default function DropDown(
  {
  videoUrl,
  setVideoUrl,
  abcCode,
  setAbcCode,
}: {
  videoUrl: string
  setVideoUrl: (v: string) => void
  abcCode: string
  setAbcCode: (v: string) => void
}) {

  // エクスポート処理
  const handleExport = () => {
    console.log('Exporting file...')
    const data = JSON.stringify({ videoUrl, abcCode }, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url

    const filename = `${document.title || 'mimicopi'}.json`
    a.download = filename

    a.click()
    URL.revokeObjectURL(url)
  }

  // インポート処理
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Importing file...')
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string)
        if (json.videoUrl && json.abcCode) {
          setVideoUrl(json.videoUrl)
          setAbcCode(json.abcCode)
        } else {
          alert('Invalid file format.')
        }
      } catch {
        alert('Failed to parse JSON.')
      }
    }
    reader.readAsText(file)
  }

  // メニューのUI
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Data List
          </DropdownMenuItem>
        <DropdownMenuItem onClick={handleExport}>
          Export
        </DropdownMenuItem>
        <DropdownMenuItem>
          <label htmlFor="import-input" className="w-full">
            Import
          </label>
        </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignInButton />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
      {/* ファイルインポート用の隠しinput */}
      <input
        id="import-input"
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </DropdownMenu>
  )
}