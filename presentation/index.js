// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  Slide,
  Image,
  Text,
  Appear,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem
} from 'spectacle'

// Import code style formatter
import CodeSlide from 'spectacle-code-slide'
// Import Terminal formatter
// import Terminal from 'spectacle-terminal'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  letzdoit: require('../assets/letzdoit.png'),
  nodeExpress: require('../assets/node-express.png'),
  zerox: require('../assets/0x.png'),
  zeroxDemo: require('../assets/0x-demo.gif'),
  autocannon: require('../assets/autocannon.png'),
  autocannonDemo: require('../assets/autocannon-demo.gif'),
  flamegraphExpress: require('../assets/flamegraph-express.png'),
  flamegraphNode: require('../assets/flamegraph-node.png'),
  fastifyWhiteHorizontal: require('../assets/fastify-white-landscape.png'),
  fastifyWhiteVertical: require('../assets/fastify-white-portrait.png'),
  nodeExpressFastify: require('../assets/node-expess-fastify.png'),
  rocket: require('../assets/rocket.jpg'),
  speed: require('../assets/speed.jpg'),
  buildRun: require('../assets/build-run.png'),
  router: require('../assets/router.png'),
  json: require('../assets/json.png'),
  helmet: require('../assets/helmet.png'),
  eventLoop: require('../assets/event-loop.png')
}

preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#000'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

const tablePadding = '40px 0 0 0'

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgImage={images.rocket}>
          <Heading size={1} caps textColor='primary'>{'What if I told you that HTTP can be fast?'}</Heading>
          <Text size={6} margin={'150px 0 0 0'}>
            <Link href='https://github.com/delvedor' target='_blank' textColor='secondary'>@delvedor</Link>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Link href='http://www.letzdoitapp.com/' target='_blank' textColor='secondary'>
            <Image src={images.letzdoit} width={600} />
          </Link>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/node-server.example')}
          ranges={[
            { loc: [0, 10], title: 'Node Plain Server' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/express.example')}
          ranges={[
            { loc: [0, 9], title: 'Express Server' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.nodeExpress} width={750} />
        </Slide>

        <Slide transition={['slide']} bgColor='secondary'>
          <Heading caps textColor='primary'>{'Let me introduce you some tooling'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.zerox} width={1000} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.zeroxDemo} width={1400} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.autocannon} width={1300} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.autocannonDemo} width={1000} />
        </Slide>

        {/* <Slide transition={['slide']} bgColor='tertiary'>
          <Heading textColor='primary' size={3} margin={'0 0 50px 0'}>{'Run 0x'}</Heading>
          <Terminal title='1. tmux -2 attach -t 0 (tmux)' output={[
            '0x benchmarks/express.js',
            <div>
              <div>0x captures stacks using dtrace, which requires sudo access</div>
              <div>Password: ••••••••</div>
            </div>,
            <div>
              <div>Example app listening on port 3000!</div>
              <div>Profiling</div>
            </div>,
            <div>
              <div>Caught SIGINT, generating flamegraph</div>
              <div>file:///Users/delvedor/Development/fastify/fastify/profile-68270/flamegraph.html</div>
            </div>
          ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading textColor='primary' size={3} margin={'0 0 50px 0'}>{'Run autocannon'}</Heading>
          <Terminal title='1. tmux -2 attach -t 0 (tmux)' output={[
            'autocannon -c 100 -d 5 -p 10 localhost:3000',

            <div><br />Running 5s test @ http://localhost:3000<br />
            100 connections with 10 pipelining factor</div>,

            <div>
              <div style={{ color: '#94dadd' }}><br />Stat           Avg       Stdev       Max</div>
              <div>Latency (ms)   8.36      25.17     118</div>
              <div>Req/Sec        11733.6   341.12    12183</div>
              <div>Bytes/Sec      2.69 MB   82.9 kB   2.88 MB</div>
              <div><br />59k requests in 5s, 13.44 MB read</div>
            </div>
          ]}
          />
        </Slide> */}

        <Slide transition={['slide']} bgColor='quartenary' align='center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.flamegraphExpress} width={window.innerWidth - 100} />
        </Slide>

        <Slide transition={['slide']} bgColor='quartenary' align='center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.flamegraphNode} width={window.innerWidth - 100} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.fastifyWhiteVertical} height={window.innerHeight - 200} />
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/code.example')}
          ranges={[
            { loc: [0, 10], title: 'Fastify Server' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.nodeExpressFastify} width={900} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem textSize={40}>Feature</TableHeaderItem>
                <TableHeaderItem textSize={40}>Express</TableHeaderItem>
                <TableHeaderItem textSize={40}>Hapi</TableHeaderItem>
                <TableHeaderItem textSize={40}>Fastify</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Routing</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Middleware</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Plugins</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Decorators</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Hooks</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Validation</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Logging</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>req/sec</TableItem>
                <TableItem textSize={40} textColor='red' padding={tablePadding}>8534</TableItem>
                <TableItem textSize={40} textColor='red' padding={tablePadding}>2200</TableItem>
                <TableItem textSize={40} textColor='green' padding={tablePadding}>21682</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={['slide']} bgImage={images.speed} bgDarken={0.6}>
          <Heading caps textColor='primary'>{'How can Fastify be so fast?'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.buildRun} width={window.innerWidth - 450} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Heading size={6} textColor='secondary'>{'Serialization'}</Heading>
          <Text textSize={40}><Link href='https://github.com/fastify/fast-json-stringify'>fast-json-stringify</Link></Text>
          <Image src={images.json} fit />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Heading size={6} textColor='secondary'>{'Why not JSON.stringify?'}</Heading>
          <Appear><Text textSize={40} padding={tablePadding}>Recursive function</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>It cannot be optimized by V8</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Generic code</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Not type specific</Text></Appear>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          width={1000}
          code={require('raw-loader!../assets/json.example')}
          ranges={[
            { loc: [0, 17], title: 'Example' },
            { loc: [0, 1], note: 'Require the library' },
            { loc: [3, 10], note: 'Schema definition' },
            { loc: [3, 4], note: 'Declare the type' },
            { loc: [4, 9], note: 'Object properties' },
            { loc: [11, 16], note: 'Stringify the object' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Heading size={6} textColor='secondary'>{'Routing'}</Heading>
          <Text textSize={40}><Link href='https://github.com/delvedor/find-my-way'>find-my-way</Link></Text>
          <Image src={images.router} fit style={{ maxHeight: window.innerHeight - 300 }} />
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/closures.example')}
          ranges={[
            { loc: [0, 10], title: 'The problem with closures' },
            { loc: [2, 5], note: 'This function is short-lived and hard to optimize' },
            { loc: [1, 6], note: 'bigdata is still in scope!' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/no-closures.example')}
          ranges={[
            { loc: [0, 12], title: 'Avoid nested closures' },
            { loc: [1, 4], note: 'bigdata exits scope here' },
            { loc: [7, 10], note: 'this function can be optimized!' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Fastify has not closures at all!'}</Heading>
          <Appear>
            <Text margin={'40px 0 0 0'}>
              <Link href='https://github.com/mcollina/reusify' target='_blank' textColor='secondary'>https://github.com/mcollina/reusify</Link>
            </Text>
          </Appear>
          <Appear>
            <Text margin={'15px 0 0 0'}>
              <Link href='https://github.com/fastify/middie' target='_blank' textColor='secondary'>https://github.com/fastify/middie</Link>
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Middlewares'}</Heading>
          <Text margin={'40px 0 0 0'}>Fastify consumes Express middlewares</Text>
          <Image src={images.helmet} />
          <Text textSize={30}>Helmet comparison</Text>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Validation'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Architecture'}</Heading>
          {/* plugins, encapsulation, separation of concerns, decorators, microservices */}
        </Slide>

        <Slide transition={['zoom']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.eventLoop} width={900} />
          <Text textSize={60} margin='20px 0 30px 0'>Fast means more I/O</Text>

          <Appear><Text textSize={40}>Get an I/O event</Text></Appear>
          <Appear><Text textSize={40}>Process the event</Text></Appear>
          <Appear><Text textSize={40}>Release the CPU</Text></Appear>
          <Appear><Text textSize={40} bold>As fast as possible</Text></Appear>
        </Slide>
      </Deck>
    )
  }
}