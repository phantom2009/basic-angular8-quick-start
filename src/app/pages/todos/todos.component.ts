import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/httpclient.service';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

	public todo={title:"",isFinished:false};
	public todos=[];
	public finishedCount=0;

	constructor(private httpClientService:HttpClientService) { }

	ngOnInit() {
		this.getTodos();
	}
	/**
	 * @Desc 查询数据
	 */
	getTodos(){
		this.httpClientService.get("todo/getAllTodos").subscribe((res)=>{
			this.todos=res;
			this.finishedCount=0;
			res.forEach((item)=>{
				if(item.isFinished){
					this.finishedCount++
				}
			})
		},error=>{
			console.log(error);
		})
	}
	/**
	 * @Desc 提交任务
	 * @param evt 
	 */
	onKeydown(evt){	
		if(evt.keyCode===13){
			if(!evt.target.value){
				alert("输入的内容不能为空！");
			}else{				
				this.todo.title=evt.target.value;
				this.todo.isFinished=false;
				this.httpClientService.post("todo/add",this.todo).subscribe((res)=>{
					if(res && res.id){
						this.getTodos();
					}else{
						console.log("数据交互异常！");
					}					
				});	
			}
		}
	}
	onMouseOver(i,evt){
		this.todos[i]["activate"]=true;
	}
	onMouseOut(i,evt){
		this.todos[i]["activate"]=false;
	}
	/**
	 * @Desc 切换任务是否完成状态
	 * @param evt 
	 */
	 onTodoStatusChange(id,isFinished,evt){
		this.httpClientService.post("todo/modify",{
			id:id,
			isFinished:isFinished
		}).subscribe((res)=>{
			if(res && res.id){
				this.getTodos();
			}else{
				console.log("数据交互异常！");
			}
		})
	}
	/**
	 * @desc 删除一条任务
	 * @param id 
	 * @param evt 
	 */
	onRemoveTodoById(id,evt){
		this.httpClientService.get("todo/del?id="+ id).subscribe((res)=>{
			this.getTodos();
		})
	}
	/**
	 * @desc 切换全选状态
	 */
	onChangeSelectAllTodos(flag,evt){
		console.log(flag)
		this.httpClientService.get("todo/changeAllStatus?flag="+flag).subscribe(()=>{
			this.getTodos();
		});
	}
	/**
	 * @desc 清理已完成
	 */
	onClearFinishedTodos(){
		/**
         *  清除已完成本来服务端使用一个delete from table where is_finished=1即可，这里咱乱写，
         *      咱用前端批量传递ids然后服务端批量接收数组参数
         */
		var ids=[];
        this.todos.forEach((item,index)=>{
            if(item.isFinished){
                ids.push(item.id);
            }
        });   
		this.httpClientService.post("todo/batchDeleteByIds",ids).subscribe((res)=>{
			this.getTodos();
		});
	}
}
