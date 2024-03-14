class Subject {
    deps: Array<Observer>
    state: number

    constructor() {
        this.deps = []
        this.state = 0
    }

    attach(ob: Observer) {
        this.deps.push(ob)
    }

    setState(num: number) {
        this.state = num
        this.notifyAllObservers(this.state)
    }

    notifyAllObservers(state: number | string) {
        this.deps.forEach(dep => {
            dep.run(state)
        })
    }
}

abstract class Observer {
    subject: Subject

    constructor(subject: Subject) {
        this.subject = subject
        this.subject.attach(this)
    }

    abstract run(data: Number | string): void
}


class ArrayObserver extends Observer {
    constructor(subject: Subject) {
        super(subject)
    }

    run(data: Number | string): void {
        console.log('this is the array observer: ', data)
    }
}

const subject = new Subject()

const observer = new ArrayObserver(subject)

subject.setState(90)