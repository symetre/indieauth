import { PluginGiven, PluginReturn } from '../../mod.ts'
export default function (input: PluginGiven): PluginReturn {
    const router = input.router
    router.get('/auth',(ctx) => {
        ctx.response.type = "html"
        ctx.response.headers.set("Content-Type", "text/html; charset=utf-8")
        ctx.response.body = 'indieauth'
    })
    
    return {
        router: router
    }
}