import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TranslationRequestsPage() {
  const requestItems = [
    {
      id: 1,
      title: "마법소녀는 은퇴하고 싶어",
      author: "사쿠라 마미코",
      requester: "별빛소녀",
      votes: 243,
      status: "투표중",
      date: "2025-05-28",
      description: "마법소녀가 은퇴를 꿈꾸지만 새로운 위협이 나타나면서 다시 한번 세계를 구해야 하는 이야기입니다.",
    },
    {
      id: 2,
      title: "전생한 악역영애는 황제를 유혹한다",
      author: "타나카 레이",
      requester: "로맨스덕후",
      votes: 187,
      status: "투표중",
      date: "2025-05-27",
      description: "소설 속 악역 영애로 전생했지만, 원작과 다르게 황제를 유혹해 운명을 바꾸려는 이야기입니다.",
    },
    {
      id: 3,
      title: "용사와 마왕의 카페",
      author: "야마모토 히로",
      requester: "판타지러버",
      votes: 156,
      status: "번역중",
      date: "2025-05-25",
      description: "은퇴한 용사와 마왕이 함께 카페를 운영하며 벌어지는 일상 판타지 이야기입니다.",
    },
    {
      id: 4,
      title: "그림자 기사단의 비밀",
      author: "쿠로사와 테츠야",
      requester: "다크나이트",
      votes: 132,
      status: "번역중",
      date: "2025-05-23",
      description: "왕국의 그림자에서 활동하는 비밀 기사단의 이야기를 다룬 다크 판타지입니다.",
    },
    {
      id: 5,
      title: "달빛 아래 너에게",
      author: "미즈키 아오이",
      requester: "월광소녀",
      votes: 98,
      status: "완료",
      date: "2025-05-20",
      description: "달빛 아래서만 만날 수 있는 소녀와 소년의 판타지 로맨스 이야기입니다.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">번역 요청 게시판</h1>
          <p className="text-gray-600 mt-2">원하는 일본 만화나 라이트노벨의 번역을 요청하고 투표해보세요!</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600">새 번역 요청하기</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="mb-6">
            <CardContent className="p-4">
              <Tabs defaultValue="popular">
                <TabsList className="mb-4">
                  <TabsTrigger value="popular">인기순</TabsTrigger>
                  <TabsTrigger value="recent">최신순</TabsTrigger>
                  <TabsTrigger value="inProgress">번역중</TabsTrigger>
                  <TabsTrigger value="completed">완료</TabsTrigger>
                </TabsList>

                <TabsContent value="popular" className="space-y-4">
                  {requestItems
                    .sort((a, b) => b.votes - a.votes)
                    .map((item) => (
                      <RequestCard key={item.id} item={item} />
                    ))}
                </TabsContent>

                <TabsContent value="recent" className="space-y-4">
                  {requestItems
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((item) => (
                      <RequestCard key={item.id} item={item} />
                    ))}
                </TabsContent>

                <TabsContent value="inProgress" className="space-y-4">
                  {requestItems
                    .filter((item) => item.status === "번역중")
                    .map((item) => (
                      <RequestCard key={item.id} item={item} />
                    ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {requestItems
                    .filter((item) => item.status === "완료")
                    .map((item) => (
                      <RequestCard key={item.id} item={item} />
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>번역 요청 방법</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p className="font-semibold">1. 요청 작성</p>
                <p className="text-gray-600 mb-2">작품명, 작가명, 간단한 설명을 작성해주세요.</p>

                <p className="font-semibold">2. 투표 참여</p>
                <p className="text-gray-600 mb-2">원하는 작품에 투표하면 번역 우선순위가 높아집니다.</p>

                <p className="font-semibold">3. 번역 진행</p>
                <p className="text-gray-600">투표수가 높은 작품부터 번역이 진행됩니다.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>인기 태그</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">로맨스판타지</Badge>
                <Badge variant="secondary">전생</Badge>
                <Badge variant="secondary">빙의</Badge>
                <Badge variant="secondary">회귀</Badge>
                <Badge variant="secondary">악역영애</Badge>
                <Badge variant="secondary">오토메게임</Badge>
                <Badge variant="secondary">BL</Badge>
                <Badge variant="secondary">GL</Badge>
                <Badge variant="secondary">이세계</Badge>
                <Badge variant="secondary">판타지</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function RequestCard({ item }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="bg-gray-100 rounded-md p-3 text-center min-w-[80px]">
            <div className="text-2xl font-bold text-orange-500">{item.votes}</div>
            <div className="text-xs text-gray-600">투표</div>
            <Button size="sm" variant="outline" className="mt-2 w-full text-xs">
              투표하기
            </Button>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <Badge
                className={
                  item.status === "투표중" ? "bg-blue-500" : item.status === "번역중" ? "bg-green-500" : "bg-purple-500"
                }
              >
                {item.status}
              </Badge>
            </div>

            <div className="text-sm text-gray-600 mb-2">
              <span className="font-medium">작가:</span> {item.author}
            </div>

            <p className="text-sm mb-3">{item.description}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <div>요청자: {item.requester}</div>
              <div>요청일: {item.date}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
