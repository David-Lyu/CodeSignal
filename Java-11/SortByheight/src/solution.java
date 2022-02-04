
public class solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(solutions(new int[] {-1,3,4,-1,10}));
	}
	
	static int[] solutions(int[] a) {
	    
	    for(int i = 0; i < a.length - 1; ++i) {
	        if(a[i] == -1) {
	            continue;
	        }
	        for(int j = i + 1; j < a.length; ++j) {
	            if(a[i] > a[j]) {
	                if(a[j] == -1) continue;
	                int temp = a[j];
	                a[j] = a[i];
	                a[i] = temp;
	            }
	            
	        }
	    }
	    
	    return a;
	}


}
