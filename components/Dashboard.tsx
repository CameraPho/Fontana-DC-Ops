'use client'
import React, { useState } from 'react'
import { FONT, LIGHT_COLORS as C } from '@/lib/constants'

export default function Dashboard() {
  const [tab, setTab] = useState<'ob' | 'ib'>('ob')
  const btn = (id: 'ob' | 'ib', label: string) => (
    <button onClick={() => setTab(id)} style={{
      padding: '10px 18px', fontFamily: FONT, fontSize: 13, fontWeight: 700,
      letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
      border: 'none', borderRadius: 8,
      background: tab === id ? C.teal : 'transparent',
      color: tab === id ? '#fff' : C.muted,
    }}>{label}</button>
  )
  return (
    <div style={{ minHeight: '100vh', background: C.bg, fontFamily: FONT, color: C.text }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: `1px solid ${C.border}` }}>
        <strong style={{ color: C.navy }}>Fontana DC — Daily Tier Board</strong>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>{btn('ob', 'Outbound')}{btn('ib', 'Inbound')}</div>
      </div>
      <div style={{ padding: 24, color: C.muted }}>
        {tab === 'ob' ? 'Outbound board — wiring to Supabase next.' : 'Inbound board — wiring to Supabase next.'}
      </div>
    </div>
  )
}
