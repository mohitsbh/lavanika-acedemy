import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { articles } from "@/lib/data"

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.href.replace("/articles/", "") }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.href === `/articles/${params.slug}`)
  if (!article) notFound()

  return (
    <div className="pt-28 pb-20 px-5 max-w-4xl mx-auto">
      <Link href="/articles" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to articles
      </Link>
      <article>
        <Badge variant="default" className="mb-4">ARTICLE</Badge>
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface leading-tight">{article.title}</h1>
          <p className="text-on-surface-variant">{article.date}</p>
        </div>
        <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-10">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">#{tag}</span>
          ))}
        </div>
        <div className="prose prose-gray max-w-none">
          <div className="glass rounded-3xl p-8 md:p-12 space-y-6 text-on-surface-variant leading-relaxed">
            <p>This article covers everything you need to know about {article.title.toLowerCase()}.</p>
            <p>At Lavanika Academy, we are committed to helping overseas-trained dentists succeed in the ADC examination pathway. Our team of experienced instructors brings real exam experience and proven teaching methods to every course.</p>
            <p>For personalised guidance on your ADC preparation journey, reach out to our team. We offer courses across Communication OSCE, Skilled OSCE, Technical Skills, Mock Exams, and ADC Written Exam coaching.</p>
            <div className="glass rounded-2xl p-6 text-center space-y-4 mt-8">
              <p className="font-semibold text-on-surface">Ready to start your ADC journey?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all">Contact us</a>
                <a href="/courses" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Explore courses</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
