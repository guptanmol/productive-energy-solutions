import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export function TestimonialCard({
  author,
  text,
  href,
  className
}) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer"
      } : {})}
      className={cn(
        "flex flex-col border-t",
        "bg-white from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[520px] sm:max-w-[520px]",
        "rounded-xl shadow-lg",          // ✅ Rounded and shadow
        "min-h-[320px]",                 // ✅ Minimum height added
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-muted-foreground">
        {text}
      </p>
    </Card>
  );
}
