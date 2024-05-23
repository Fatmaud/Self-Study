//! .d.ts uzantısnı typescript global alan olarak görüyor. Vu bu uzantıdaki dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz.

interface ITodoType {
    task: string ;
    isDone: boolean;
    id: string | number;
}

type AddFn = (text:string) => Promise<void>;

type ToggleFn = (todo:ITodoType) => Promise<void>;

type DeleteFn = (id:string | number) => Promise<void>;

interface ITodoListFn {
    deleteTodo:DeleteFn;
    toggleTodo:ToggleFn;
}