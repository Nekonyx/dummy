export abstract class BaseParentCommand<TCommand> {
  public abstract name: string
  public abstract description: string
  public children: (BaseParentCommand<TCommand> | TCommand)[] = []
}
