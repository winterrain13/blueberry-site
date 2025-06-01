import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, Heart, Bell } from "lucide-react"

export default function HomePage() {
  const categories = ["전체", "로맨스", "로맨스판타지", "BL", "GL", "라이트노벨"]

  const webtoonItems = [
    {
      id: 1,
      title: "악역 영애의 집사가 되었습니다",
      author: "타나카 유우키",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
      isNew: true,
    },
    {
      id: 2,
      title: "전생했더니 슬라임이었던 건에 대하여",
      author: "후세 미츠",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
      isPopular: true,
    },
    {
      id: 3,
      title: "나의 최애는 악역 영애",
      author: "이나오 히데키",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
    },
    {
      id: 4,
      title: "오토메 게임의 파멸 플래그",
      author: "야마구치 사토루",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
      isHot: true,
    },
    {
      id: 5,
      title: "약혼파기당한 영애의 인생",
      author: "사쿠라이 카나메",
      image: "/placeholder.svg?height=200&width=150",
      isFree: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-4">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">여성향 번역</span>
              <Link href="#" className="text-blue-600 hover:underline">
                무제한 읽기
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                리뷰
              </Link>
              <Link href="#" className="text-blue-600 hover:underline">
                번역 요청
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signup"><Button variant="outline" size="sm">
                무료 회원가입
              </Button></Link>
              <Link href="/auth/signin"><Button variant="ghost" size="sm">
                로그인
              </Button></Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-orange-500">
                  여성향<span className="bg-orange-500 text-white px-2 py-1 rounded ml-1">번역</span>
                </div>
              </Link>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input placeholder="작품명, 작가명으로 검색하세요" className="w-80 pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <Heart className="h-5 w-5" />
                <span className="text-xs">즐겨찾기</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center">
                <Bell className="h-5 w-5" />
                <span className="text-xs">고객센터</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex flex-col items-center relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs">장바구니</span>
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  0
                </Badge>
              </Button>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="border-t">
            <div className="flex items-center space-x-1 py-2 overflow-x-auto">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "ghost"}
                  size="sm"
                  className={`whitespace-nowrap ${index === 0 ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 space-y-4">
            {/* Promotional Banner */}
            <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-bold mb-2">여성향 번역을 즐겨보세요!</div>
                  <div className="space-y-1 text-sm">
                    <div>▶ 이용 가이드</div>
                    <div>▶ 처음 오신 분들께</div>
                    <div>▶ 커뮤니티</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2 text-sm">
                  <div className="font-semibold text-orange-600">전체 작품 둘러보기</div>
                  <div className="space-y-1 ml-2">
                    <Link href="#" className="block text-blue-600 hover:underline">
                      신작 번역
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      무제한 읽기 신작
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      인기 랭킹
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      완전 무료 번역
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      로맨스 소설
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      BL 소설
                    </Link>
                    <Link href="#" className="block text-blue-600 hover:underline">
                      라이트노벨
                    </Link>
                    <Link href="/translation-requests" className="block text-blue-600 hover:underline font-semibold">
                      번역 요청 게시판
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
            {/* Promotional Banners */}
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-green-400 to-green-600 text-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-2">70% 할인</div>
                      <div className="text-lg">쿠폰 받아가세요!</div>
                      <div className="text-sm">추가로 작품 구매시</div>
                      <div className="text-xl font-bold">최대 100%</div>
                      <div className="text-sm">포인트 적립!</div>
                    </div>
                    <Button className="bg-white text-green-600 hover:bg-gray-100">지금 무료가입 ≫≫≫</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">무료가입하고 70% 할인쿠폰 받으세요!</div>
                    <div className="text-sm">추가로 작품 구매시 최대 100% 포인트 적립!</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Content Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">화제의 애니메이션화 작품을 읽어보세요!</h2>
                <Link href="#" className="text-blue-600 hover:underline flex items-center">
                  더보기 ≫
                </Link>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {webtoonItems.map((item) => (
                  <Card key={item.id} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-3">
                      <div className="relative mb-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={150}
                          height={200}
                          className="w-full h-48 object-cover rounded"
                        />
                        {item.isNew && (
                          <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">신작</Badge>
                        )}
                        {item.isHot && (
                          <Badge className="absolute top-2 right-2 bg-orange-500 text-white text-xs">인기</Badge>
                        )}
                        {item.isPopular && (
                          <Badge className="absolute top-2 left-2 bg-purple-500 text-white text-xs">베스트</Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                        {item.author && <p className="text-xs text-gray-600">{item.author}</p>}
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          무료 미리보기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Additional Featured Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">무료 체험! 인기 번역 작품 726편!</h2>
                <Link href="#" className="text-blue-600 hover:underline flex items-center">
                  더보기 ≫
                </Link>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {webtoonItems.map((item) => (
                  <Card key={`free-${item.id}`} className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-3">
                      <div className="relative mb-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={150}
                          height={200}
                          className="w-full h-48 object-cover rounded"
                        />
                        <Badge className="absolute top-2 left-2 bg-green-500 text-white text-xs">무료</Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          무료 미리보기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
