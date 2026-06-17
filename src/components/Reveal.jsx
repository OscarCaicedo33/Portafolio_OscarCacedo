import { useInView } from '../hooks/useInView'

// Envoltorio de scroll reveal: aplica fade + subida al entrar en viewport.
// `delay` (ms) permite escalonar elementos de una misma fila/grid.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
