package almostIncreasingSequence;

public class impl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] sequence = {1,3,2,1};
		System.out.println(solution(sequence));
	}
	
	static boolean solution(int[] sequence) {
	    boolean hasBeenSkipped = false;
	    for(int i = 0; i < sequence.length -1; i++) {
	        int diff = sequence[i] - sequence[i+1];
	        if(diff >= 0) {
	            if(hasBeenSkipped) return false;
	            
	            if(i != 0) {
	                if(i >= sequence.length - 2 || sequence[i] - sequence[i + 2] >= 0) {    
	                    diff = sequence[i - 1] - sequence[i + 1];
	                    if(diff >= 0 && i + 1 != sequence.length - 1) return false;
	                }
	            
	            }
	            
	            hasBeenSkipped = true;
	        }
	    }
	    return true;
	}

}
