import clsx from 'clsx'

export function Prose({ children, className }: {children: any, className: string}) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
