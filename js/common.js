/*
 * �����ƶ��˵ĵ���¼�click ��300���ҵ��ӳ٣� �û������д�����
 *  ϣ�� ����touch�¼���װһ����Ӧ�ٶȸ���� ����¼� tap
 *
 *   touch�ж�Ϊ����¼���������
 *
 *   1��������ʼ ����������  ��ָû���ƶ�
 *   2���Ӵ���Ļ��ʱ�� С��ָ����ֵ 150ms
 *
 *
 *   ���������������� ������Ϊ�ǵ���¼�������
 * */


/*
*  ������ȫ�ֵı��� ���� ���� �����ȫ����Ⱦ
*  ����� ʹ�������ռ�
*/

/*
*  ������ܣ�
*   ��ָ����Ԫ�� ���Ż�����ƶ��ĵ���¼�--- tap�¼�
*   ������
*   obj:Ҫ���Ż������¼���Ԫ��
*   callback: ������¼����� ִ��ʲô����
* */

var itcast={
    tap:function(obj,callback){
        if(typeof obj=='object'){ //�жϴ����obj�Ƿ�Ϊ����

            var startTime=0;//��¼��ʼ�¼�
            var isMove=false; //��¼�Ƿ��ƶ�

            obj.addEventListener('touchstart',function(){
                startTime=Date.now(); //��ȡ��ǰʱ���
            });

            obj.addEventListener('touchmove',function(){
               isMove=true; //��¼�ƶ�

            });

            obj.addEventListener('touchend',function(e){
                //�ж��Ƿ�������������
                if(!isMove&&Date.now()-startTime<150){
                    //tap����¼�����
                    //if(callback){
                    //    callback();
                    //}
                    callback&&callback(e);
                }

                //��������
                isMove=false;
                startTime=0;
            });
        }
    }
}




