import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import h_wntj from '@/components/home/wntj'
import h_rmphb from '@/components/home/rmphb'
import h_lb from '@/components/home/lb'
import h_bjjx from '@/components/home/bjjx'
import h_qxty from '@/components/home/qxty'
import h_jt from '@/components/home/jt'
import about from '@/components/about'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import game from '@/components/game';
import g_wntj from '@/components/game/wntj'
import g_rmphb from '@/components/game/rmphb'
import g_lb from '@/components/game/lb'
import g_ffyx from '@/components/game/ffyx'
import g_jt from '@/components/game/jt'
import movie from '@/components/movie';
import m_wntj from '@/components/movie/wntj'
import m_cx from '@/components/movie/cx'
import m_xpsx from '@/components/movie/xpsx'
import m_lx from '@/components/movie/lx'
import m_zpgs from '@/components/movie/zpgs'
import book from '@/components/book';
import b_ysdw from '@/components/book/ysdw'
import b_dzs from '@/components/book/dzs'
import b_lx from '@/components/book/lx'
import b_cx from '@/components/book/cx'
import b_xsj from '@/components/book/xsj'
import b_rmmfnr from '@/components/book/rmmfnr'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
    {
		path: '/home',
		component: home,
		children:[
			{
                path:'/home/wntj',
                component:h_wntj
            },
			{
                path:'/home/rmphb',
                component:h_rmphb
            },
			{
                path:'/home/lb',
                component:h_lb
            },
			{
                path:'/home/bjjx',
                component:h_bjjx
            },
			{
                path:'/home/qxty',
                component:h_qxty
            },
			{
                path:'/home/jt',
                component:h_jt
            }
			
		]
    },{
		path: '/game',
        component: game,
		children:[
			{
                path:'/game/wntj',
                component:g_wntj
            },
			{
                path:'/game/rmphb',
                component:g_rmphb
            },
			{
                path:'/game/ffyx',
                component:g_ffyx
            },
			{
                path:'/game/lb',
                component:g_lb
            },
			{
                path:'/game/jt',
                component:g_jt
            }
			
		]
	},{
		path: '/movie',
        component: movie,
		children:[
			{
                path:'/movie/wntj',
                component:m_wntj
            },
			{
                path:'/movie/cx',
                component:m_cx
            },
			{
                path:'/movie/xpsx',
                component:m_xpsx
            },
			{
                path:'/movie/lx',
                component:m_lx
            },
			{
                path:'/movie/zpgs',
                component:m_zpgs
            }
			
		]
	},{
		path: '/book',
        component: book,
		children:[
			{
                path:'/book/ysdw',
                component:b_ysdw
            },
			{
                path:'/book/dzs',
                component:b_dzs
            },
			{
                path:'/book/lx',
                component:b_lx
            },
			{
                path:'/book/cx',
                component:b_cx
            },
			{
                path:'/book/xsj',
                component:b_xsj
            },
			{
                path:'/book/rmmfnr',
                component:b_rmmfnr
            }
			
		]
	}
  ]
})
